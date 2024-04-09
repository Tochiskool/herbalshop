import React from 'react';
import classes from "./thumbnails.module.css";
import { Link } from 'react-router-dom';
import StarRating from '../StarRating/StarRating';
import Price from '../Price/Price';
const Thumbnails = ({drugs}) => {
  return (
    <>
        <ul className={classes.list}>
            {
                drugs.map(drug => 
                    <li key={drug.id}>
                        <Link to={`/drug/${drug.id}`}>
                           <img 
                           className={classes.image}
                           src={`/drugs/${drug.imageUrl}`}
                           alt={drug.name}
                           />
                       
                        <div className={classes.content}>
                          <div className={classes.name}>{drug.name}</div>
                          <span className={`${classes.favorite} ${
                            drug.favorite ? "" : classes.not
                          }`}>
                            ♥
                          </span>
                          <div className={classes.stars}>
                            <StarRating stars={drug.stars}/>
                          </div>
                          <div className={classes.product_item_footer}>
                            <div className={classes.tags}>
                              {
                                drug.tags.map(tag => (
                                  <span key={tag}>{tag}</span>
                                ))
                              }
                            </div>
                            <div className={classes.cook_time}>
                            <span>🕒</span>
                            {drug.cookTime}
                          </div>
                          </div>
                         <div className={classes.price}>
                          <Price price={drug.price}/>
                         </div>
                        </div>
                        </Link>
                    </li>
                    )
            }
        </ul>
    </>
  )
}

export default Thumbnails;