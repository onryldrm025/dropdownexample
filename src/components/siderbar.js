
import * as AiIcons from 'react-icons/fa'
import * as IoIcons from 'react-icons/io'
import * as RiIcons from 'react-icons/ri'



 const SidebarJson = [
    {
        "title":"Dasborad",
        "icon":<AiIcons.FaAdjust />,
        "iconClose":<RiIcons.RiArrowDownSFill/>,
        "iconOpen":<RiIcons.RiArrowUpSFill/>,
        subNav:[
            {
                title:'Deneme',
                path:'/dasboard/deneme',
                icons:<IoIcons.IoMdPaper />
            },
            {
                title:'Deneme2',
                path:'/dasboard/deneme2',
                icons:<IoIcons.IoIosAddCircle />
            }
        ]
    },
    {
        "title":"Rapor",
        "icon":<AiIcons.FaAirbnb />,
        "iconClose":<RiIcons.RiArrowDownSFill/>,
        "iconOpen":<RiIcons.RiArrowUpSFill/>,
        subNav:[
            {
                title:'rapor',
                path:'/rapor/deneme',
                icons:<IoIcons.IoMdPaper />
            },
            {
                title:'Deneme2',
                path:'/rapor/deneme2',
                icons:<IoIcons.IoIosAddCircle />
            }
        ]
    },

    {
        "title":"Rapor",
        "url":"/rapor",
        "icon":<AiIcons.FaAmazonPay />,     
    },
   
]

export default SidebarJson


