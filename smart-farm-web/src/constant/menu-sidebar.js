import { RiHome8Line, RiSettings5Line, RiLineChartLine, RiTimeLine, RiTempHotLine, RiShowersLine, RiDropLine} from 'react-icons/ri';

const menuSidebar = [
    {
      title: 'หน้าหลัก',
      icon: <RiHome8Line />,
      path: '/main',
      pageName:'main'
    },
    {
      title: 'ตั้งค่าเวลา',
      icon: <RiTimeLine />,
      path: '/time',
      pageName:'time'
    },
    {
      title: 'ตั้งค่าอุณหภูมิ',
      icon: <RiTempHotLine />,
      path: '/temp',
      pageName:'temp'
    },
    {
      title: 'ตั้งค่าความชื้น',
      icon: <RiShowersLine />,
      path: '/humid',
      pageName:'humid'
    },
    {
      title: 'ตั้งค่าความชื้นดิน',
      icon: <RiDropLine />,
      path: '/soilHumid',
      pageName:'soilHumid'
    },
    {
      title: 'กราฟและตารางข้อมูล',
      icon: <RiLineChartLine />,
      path: '/graph',
      pageName:'graph'
    },
    {
      title: 'ตั้งค่าระบบ',
      icon: <RiSettings5Line />,
      path: '/setting',
      pageName:'setting'
    },
  ];
  export default menuSidebar;