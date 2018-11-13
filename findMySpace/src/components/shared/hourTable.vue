<template>
	<div> 
      	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">


      	<div class="container-fluid">


	      	<div class="row align-items-center" v-for="i in rowsCount">
	      		<div v-for="j in 9" v-bind:class="getCellStyle(i, j)" v-on:click="handleClickOnCell(i, j)" style="padding-left: 0px; padding-right: 0px;">

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


	    </div>


  	</div>
</template>

<script>
const Moment = require('moment');
const MomentRange = require('moment-range');

const moment = MomentRange.extendMoment(Moment);

export default {

	data() {

		return {
			date: new Date(), //props

			weekDays: ['seg', 'ter', 'qua', 'qui', 'sex', 'sáb', 'dom'],
			hours: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],

			events: [ 
				{
					fromDate: moment().add(1, 'days').hour(10).toDate(),
					toDate: moment().add(1, 'days').hour(23).toDate(),
					group: {
						id: 1,
						name: 'Super Girls',
						contact: '(81) 99999-9999'
					},
					isAccepted: false
				},

				{
					fromDate: moment().add(3, 'days').hour(10).toDate(),
					toDate: moment().add(3, 'days').hour(18).toDate(),
					group: {
						id: 1,
						name: 'Super Girls',
						contact: '(81) 99999-9999'
					},
					isAccepted: false
				},

				{
					fromDate: moment().add(5, 'days').hour(16).toDate(),
					toDate: moment().add(5, 'days').hour(22).toDate(),
					group: {
						id: 1,
						name: 'Super Girls',
						contact: '(81) 99999-9999'
					},
					isAccepted: false
				}
			]
		}
	},

	methods: {

		handleClickOnCell: function(i, j) {
			console.log('clicou na tabela ', i, j)
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

		populateEventForCell: function(i, j) {
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
						return 'eventStyleATop'
					else if (cellFinalMoment.within(moment.rangeFromInterval('hour', 1, eventFinalMoment)))
						return 'eventStyleABottom'
				} else if (cellFinalMoment.isAfter(eventFinalMoment))
					continue;

				const eventRangeMoment = moment.range(eventStartMoment, eventFinalMoment)

				if (eventRangeMoment.overlaps(cellRangeMoment) || cellRangeMoment.overlaps(eventRangeMoment)) {
				 	return 'eventStyleA'
				}
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
		}
	}

}

</script>

<style scoped>

.cell {
	position: relative;
  	min-height: 50px;
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
	border-top-left-radius: 15px
}

.roundedTopRightBorder {
	border-top-right-radius: 15px
}

.roundedBottomLeftBorder {
	border-bottom-left-radius: 15px
}

.roundedBottomRightBorder {
	border-bottom-right-radius: 15px
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
	background-color: rgba(110, 80, 119, 1)
}

.eventStyleABottom {
	background-image: url('../../assets/hourTable/arrow_down.png');
	background-position: center;
  	background-repeat: no-repeat;
    background-size: 50px 25px;
	background-color: rgba(110, 80, 119, 1)
}
</style>