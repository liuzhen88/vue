import OrderStatus from './components/orderStatus';
import Store from './components/store';
import DayTable from './components/dayTable';
import SummaryTable from './components/summaryTable';
import DayUnqualify from './components/dayUnqualify';
import WorkerPerformance from './components/workerPerformance';
import ProductReport from './components/productReport';

let routers = [
	{
		path:'/orderStatus',
		component:OrderStatus,
	},
	{
		path:'/store',
		component:Store
	},
	{
		path:'/dayTable',
		component:DayTable
	},
	{
		path:'/summaryTable',
		component:SummaryTable
	},
	{
		path:'/dayUnqualify',
		component:DayUnqualify
	},
	{
		path:'/workerPerformance',
		component:WorkerPerformance
	},
	{
		path:'/productReport',
		component:ProductReport
	},
	{
		path:'/',
		component:OrderStatus
	}
];

export default routers;