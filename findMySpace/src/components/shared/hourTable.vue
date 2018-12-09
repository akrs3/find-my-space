<template>
	<div> 
      	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">


      	<div class="container-fluid">


	      	<div class="row align-items-center" v-for="i in rowsCount">
	      		<div v-for="j in 9" v-bind:class="getCellStyle(i, j)" v-on:click="handleClickOnCell(i, j, $event)" style="padding-left: 0px; padding-right: 0px;">

	      			<div v-if="i == 1 && j > 2">
		      			<span style="color: #6E5077; font-size: 16pt;">{{ getWeekdayForColumn(i, j) }}</span>
		      			<br/>
		      			<span style="color: #6E5077; font-size: 16pt;">{{ getMonthDayForColumn(i,j) }}</span>
	      			</div>

	      			<div v-if="j==1 && i >= 3 && ((i - 2) % 2)">
		      			<span style="color: #6E5077; font-size: 18pt;">{{ getHourForLine(i, j) }}h</span>
	      			</div>

	      			<hr v-if="cellHasDivisor(i, j)"/>
	      		</div>
	      	</div>

	      	<div class="eventDetailsPopup" v-show="isShowingEvent" v-bind:style="{ top: showingEventOffsetTop + 'px', left: showingEventOffsetLeft + 'px' }">

		      	<span style="color: #C6853A; font-size: 25pt;">{{ showingEventWeekDay }}</span>
		      	<br/>
		      	<span style="color: #C6853A; font-size: 25pt; font-weight: bold;">{{ showingEventHourRange }}</span>
	      		
	      		<div v-if="showingEventHasGroup" style="margin-top: 15px;">
		      		<span style="color: #C6853A; font-size: 25pt;">reservado para</span>
		      		<br/>
		      		<span style="color: #C6853A; font-size: 25pt; font-weight: bold;">{{ showingEventGroupName }}</span>
	      		</div>

	      		<div v-if="showingEventHasGroup" style="margin-top: 15px;">
		      		<span style="color: #C6853A; font-size: 25pt; padding-top: 10px">contato</span>
		      		<br/>
		      		<span style="color: #C6853A; font-size: 25pt; font-weight: bold;">{{ showingEventGroupContact }}</span>
	      		</div>

	      		<div v-if="showingEventHasGroup && !showingEventGroupIsAccepted" style="margin-top: 30px;">

	      			<div class="row">
	      				<div class="col-auto">
	      					<button class="eventDetailsPopupAcceptRequestButton" v-on:click="didAcceptShowingEvent"/>
	      				</div>
	      				<div class="col-auto">
	      					<button class="eventDetailsPopupDenyRequestButton" v-on:click="didDenyShowingEvent"/>
	      				</div>
	      			</div>
	      		</div>

	      		<div v-if="!showingEventHasGroup" style="margin-top: 15px;">
		      		<span style="color: #C6853A; font-size: 25pt; padding-top: 10px">disponível para reserva</span>
	      		</div>
	      	</div>


	      	<div v-if="editing" style="margin-top: 25px; width: 50%; margin: auto;">
		      	<roundedButton title='resetar horários' v-bind:compressed='true' v-bind:handler='clearSelectedSchedules' />
	      	</div>

	    </div>


  	</div>
</template>

<script>

import roundedButton from '../shared/roundedButton'

const Moment = require('moment');
const MomentRange = require('moment-range');

const moment = MomentRange.extendMoment(Moment);

/*

	PRORIEDADES QUE PODEM SER PASSADAS PARA ESTE COMPONENTE

	events (array de objetos) = [
		{ 
			fromDate: Date() (hora que comeca o evento),
			toDate: Date() (hora que termina o evento),
			group: { (grupo que agendou esse horario - opcional)
				id: Int,
				name: String,
				contact: String
			},
			isAccepted: Boolean (indica se o grupo ja foi aceito pelo dono - opcional)
		}
	],

	editing: Boolean (indica se esta no modo de edicao ou nao - criacao de um espaco tem editing true por exemplo),

	didChangeShedules: Function (passar uma funcao que tem a assinatura x(events) que sera chamada sempre que houver alteracao nos horarios selecionados -- events sera um array de horarios (da um console.log pra entender melhor))
*/

export default {
 	components: {
    	roundedButton
  	},

	props: {
		events: {
			type: Array,
			default: function() { return [] }
		},
		editing: {
			type: Boolean,
			default: false
		},
		didChangeSchedules: Function
	},

	data() {
		return {
			date: new Date(), //props

			weekDays: ['seg', 'ter', 'qua', 'qui', 'sex', 'sáb', 'dom'],
			hours: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],

			showingEvent: null
		}
	},

	methods: {

		didAcceptShowingEvent: function() {
			alert('Aceitou!')
		},

		didDenyShowingEvent: function() {
			alert('Negou!')
		},

		clearSelectedSchedules: function() {
  			this.events = []
  		},

		handleClickOnCell: function(i, j, clickEvent) {

			if (this.editing) {

				const cellMoment = this.getStartAndFinalMomentForCell(i, j)[0].add(1,'seconds')

				let eventThatDay = null
				for (let i = 0; i < this.events.length; i++) {
					let event = this.events[i]
					let eventMomentFrom = moment(event.fromDate)
					if (eventMomentFrom.isSame(cellMoment, 'day')) 
						eventThatDay = event
				}

				if (eventThatDay == null) {
					const event = {
						fromDate: cellMoment.toDate(),
						toDate: cellMoment.toDate()
					}

					this.events.push(event)
				} else {
					if (cellMoment.isAfter(eventThatDay.toDate, 'hour'))
						eventThatDay.toDate = cellMoment.toDate()
					else if (cellMoment.isBefore(eventThatDay.fromDate, 'hour'))
						eventThatDay.fromDate = cellMoment.toDate()
				}
				
				this.didChangeSchedules(this.events)

			} else {

				let { event } = this.getEventForCell(i, j)

				if (event == null) {

					if (this.showingEvent)
						this.showingEvent = null

					return
				}

				let popupTopPosition = clickEvent.clientY
				if (popupTopPosition + 500 > this.screenSize.height)
					popupTopPosition = this.screenSize.height - 300

				let popupLeftPosition = clickEvent.clientX
				if (popupLeftPosition + 400 > this.screenSize.width)
					popupLeftPosition -= 400

				this.showingEvent = {
					fromDate: event.fromDate,
					toDate: event.toDate,
					group: event.group,
					isAccepted: event.isAccepted,
					popup: {
						position: {
							top: popupTopPosition,
							left: popupLeftPosition
						}
					}
				}
			}
		},

		getStartAndFinalMomentForCell: function(i, j) {
			let isIntermediary = ((i-3)/2) % 1 != 0

			let hour = this.hours[Math.floor((i-3)/2)]

			let m = moment(this.date).isoWeekday(j-2)
			let m1 = moment(this.date).isoWeekday(j-2)

			m.hour(hour);
			m.minute(0);
			m.second(0);

			m1.hour(hour+1);
			m1.minute(0);
			m1.second(0);

			return [m, m1, isIntermediary]
		},

		getMonthDayForColumn: function(i, j) {
			return moment(this.date).isoWeekday(j-2).format('D');
		},

		getWeekdayForColumn: function(i, j) {
			return this.weekDays[j-3] 
		},

		getHourForLine: function(i, j) {
			return this.hours[(i-3)/2]
		},

		getCellStyle: function(i, j) {
			let styling = 'cell '

			if (j == 2)
				styling += 'col-1 '
			else
				styling += 'col '

			//table colors interpolation
			if ((j >= 3) && (i >= 2)) {
				if ((j-2) % 2)
					styling += 'darkColumnColor '
				else
					styling += 'lightColumnColor '
			}

			//rounded borders
			if (i == 2) {
				if (j == 3)
					styling += 'roundedTopLeftBorder '
				else if (j == 9) 
					styling += 'roundedTopRightBorder '
			} else if (i == this.rowsCount) {
				if (j == 3)
					styling += 'roundedBottomLeftBorder '
				else if (j == 9)
					styling += 'roundedBottomRightBorder '
			}

			//paddings
			if (i == 1)
				styling += 'weekDaysCell '
			else if ((j == 1) && (i > 2) && (i <= this.rowsCount))
				styling += 'hourCell '
			else if ((i == 2) || (i == 40))
				styling += 'roundedCell '
			else
				styling += 'defaultCell '

			//events
			if ((i > 2) && (j > 1) && (i <= this.rowsCount))
				styling += this.populateEventForCell(i, j)


			return styling
		},

		cellHasDivisor: function(i, j) {
			if ((i > 2) && (j > 1) && ((i - 2) % 2))
				return true

			return false
		},

		getEventForCell: function(i, j) {
			const moments = this.getStartAndFinalMomentForCell(i, j);
			const cellStartMoment = moments[0]
			const cellFinalMoment = moments[1]
			const isCellIntermediary = moments[2]

			const cellRangeMoment = moment.range(cellStartMoment, cellFinalMoment)

			for (let i = 0; i < this.events.length; i++) {
				let event = this.events[i]

				const eventStartMoment = moment(event.fromDate)
				const eventFinalMoment = moment(event.toDate) 

				 if (!isCellIntermediary) {
				 	if (eventStartMoment.within(moment.rangeFromInterval('hour', 1, cellStartMoment)))
				 		return { event, cellType: 'start' } 
				} else if (cellFinalMoment.within(moment.rangeFromInterval('hour', 1, eventFinalMoment)))
					return { event, cellType: 'final' }
				else if (cellFinalMoment.isAfter(eventFinalMoment))
					continue

				const eventRangeMoment = moment.range(eventStartMoment, eventFinalMoment)

				if (eventRangeMoment.overlaps(cellRangeMoment) || cellRangeMoment.overlaps(eventRangeMoment)) {
				 	return { event, cellType: 'normal' }
				}
			}

			return { event: null, cellType: null };
		},

		populateEventForCell: function(i, j) {

			let { event, cellType } = this.getEventForCell(i, j);

			if ((event != null) && (cellType != null)) {
				if (cellType == 'start')
					return 'eventStyleATop'
				else if (cellType == 'final')
					return 'eventStyleABottom'
				else if (cellType == 'normal')
					return 'eventStyleA'
			}

			return;
		}
	},

	computed: {

		hoursCount: function() {
			return this.hours.length
		},

		rowsCount: function() {
			return this.hours.length + 20
		},

		isShowingEvent: function() {
			return this.showingEvent != null
		},

		showingEventOffsetTop: function() {
			if (this.showingEvent == null)
				return 0

			return this.showingEvent.popup.position.top
		},

		showingEventOffsetLeft: function() {
			if (this.showingEvent == null)
				return 0

			return this.showingEvent.popup.position.left
		},

		showingEventWeekDay: function() {
			if (this.showingEvent == null)
				return

			return moment(this.showingEvent.fromDate).format("dddd").toLowerCase()
		},

		showingEventHourRange: function() {
			if (this.showingEvent == null)
				return

			return `${moment(this.showingEvent.fromDate).format("HH")}h - ${moment(this.showingEvent.toDate).format("HH")}h`
		},

		showingEventHasGroup: function() {
			if (this.showingEvent == null)
				return false
			else if (this.showingEvent.group == null)
				return false

			return true
		},

		showingEventGroupName: function() {
			if (this.showingEvent == null)
				return false
			else if (this.showingEvent.group == null)
				return false

			return this.showingEvent.group.name 
		},

		showingEventGroupContact: function() {
			if (this.showingEvent == null)
				return false
			else if (this.showingEvent.group == null)
				return false

			return this.showingEvent.group.contact 
		},

		showingEventGroupIsAccepted: function() {
			if (this.showingEvent == null)
				return false
			else if (this.showingEvent.group == null)
				return false

			return this.showingEvent.isAccepted || false
		},

		screenSize: function() {
			const width = document.documentElement.clientWidth;
			const height = document.documentElement.clientHeight;

			return { width, height}
		}
	}

}

</script>

<style scoped>

.cell {
	position: relative;
  	min-height: 40px;
}

.roundedCell {}

.defaultCell {}

.weekDaysCell {
	padding-bottom: 20px;
}

.hourCell {
	position: relative;
    top: -20px;
 }

.darkColumnColor {
	background:rgba(139, 115, 146, 0.47);
}

.lightColumnColor {
	background: rgba(168,150,173, 0.51);
}

.roundedTopLeftBorder {
	border-top-left-radius: 15px;
}

.roundedTopRightBorder {
	border-top-right-radius: 15px;
}

.roundedBottomLeftBorder {
	border-bottom-left-radius: 15px;
}

.roundedBottomRightBorder {
	border-bottom-right-radius: 15px;
}

.cell hr {
	position: absolute;
  	width: 100%;
  	top: 0;
  	margin: 0;
	background-color: #6E5077; 
	opacity: 0.37;
  	height: 1px; 
}

.eventStyleA {
	background-color: rgba(110, 80, 119, 0.85);
}

.eventStyleATop {
	background-image: url('../../assets/hourTable/arrow_up.png');
	background-position: center;
  	background-repeat: no-repeat;
    background-size: 50px 25px;
	background-color: rgba(110, 80, 119, 1);
}

.eventStyleABottom {
	background-image: url('../../assets/hourTable/arrow_down.png');
	background-position: center;
  	background-repeat: no-repeat;
    background-size: 50px 25px;
	background-color: rgba(110, 80, 119, 1);
}

.eventDetailsPopup {
	text-align: left;
	padding: 30px;
	width: 400px;
	min-height: 300px;
	max-height: 500px;
  	height: auto;
  	position: absolute;
  	z-index: 10;
	border-top-left-radius: 40px;
	border-top-right-radius: 40px;
	border-bottom-left-radius: 40px;
	border-bottom-right-radius: 40px;
	background-color: rgba(242, 238, 230, 1.0);
}

.eventDetailsPopupAcceptRequestButton {
    width: 70px;
    height: 70px;
    background-image: url('../../assets/shared/button-okay.png');
 	background-size: 100%; 
  	background-size: 70px auto; 
 	background-color: transparent;
    border: none;
}

.eventDetailsPopupAcceptRequestButton:focus {
  outline:0 !important;
}

.eventDetailsPopupDenyRequestButton {
    width: 70px;
    height: 70px;
    background-image: url('../../assets/shared/button-cancel.png');
 	background-size: 100%; 
  	background-size: 70px auto; 
 	background-color: transparent;
    border: none;
}

.eventDetailsPopupDenyRequestButton:focus {
  outline:0 !important;
}

</style>