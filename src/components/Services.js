import React, { Component } from 'react';
import {FaGlobeAsia,FaHands,FaShuttleVan, FaDharmachakra} from 'react-icons/fa';
import Title from './Title'
export default class Services extends Component {
    state={ services:[
        {
        icon:<FaGlobeAsia/>,
        title:"Explore The World",
        info:"From the Heart of Europe to Exotic Locales in Africa and Asia. Browse these listings to see where your next world adventure can take you."   
        },

        {
            icon:<FaHands/>,
            title:"Complimentary Local Food",
            info:"All listings include complimentary meals and drinks to let you truly experience the local culture."      },

            {   icon:<FaShuttleVan/>,
                title:"Courtesy Shuttle Van",
                info:"For additional fees arrangements can be made to pick you up at the local airport or bus station."
                },


                {  icon:<FaDharmachakra/>,
                    title:"Local Tours",
                    info: "Contact our agency and we can provide local guides to help you truly explore around your exotic getaway."               }
          ]
        
        }
    render() {
        return (
            <section className="services">
               <Title title='Explore The World With Us' />
               <div className="services-center">
                {this.state.services.map ((item, index) => {
                   return ( 
                   <article key={index} 
                   className="service">
                       <span>{item.icon}</span>
                       <h6>{item.title}</h6>
                       <p>{item.info}</p>
                   </article>
                   );
                })}
               </div>
               </section>
            
        )
    }
}
