import { Link } from 'react-router-dom';
import './Accordion.css';

const Accordion = ({accordion, setData, isNext, isPrev}) => {
    return(
      <div className="container">
                {accordion.map((category) => {
                    return(
                        <div className='accordion' key={category._id}
                        style={{backgroundImage: `url(${category.image})`}}>
                            <div className='accordion-content' >
                            <h5 className='accordion-header'>{category.categoryName}</h5>
                            <p className='accordion-description'>{category.description}</p>
                            <Link to='/Explore'> 
                            <button className='btn btn-tertiary' 
                            >Watch Now</button>
                            </Link>
                            </div>
                        </div>
                    )
                })}
                <div className="btn-links">
                     <button 
                     className="btn-tertiary-outline btn-float" 
                     onClick={() => setData({type:"ACCORDION", accordion:-1})} 
                     disabled={isPrev}>
                        <span>
                              <i className="icon fas fa-arrow-left"></i>
                        </span>
                     </button>
                     <button 
                     className="btn-tertiary-outline btn-float" 
                     onClick={() => setData({type:"ACCORDION", accordion:1})} 
                     disabled={isNext}>
                        <span>
                               <i className="icon fas fa-arrow-right"></i>
                        </span>
                     </button>
                </div>
      </div>
    );
};

export default Accordion;