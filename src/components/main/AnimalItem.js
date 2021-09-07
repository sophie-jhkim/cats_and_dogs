import React from 'react';

const AnimalItem = ({item}) => {
    const {desertionNo, happenDt, happenPlace, kindCd, colorCd, age, weight, popfile, processState, sexCd, neuterYn, specialMark, careNm, careTel, careAddr, orgNm, chargeNm, officetel, noticeComment} = item
    console.log(item)
    
    return (
        <li className="item_wrap">
            <a href="#">
                <div className="img_wrap">
                    <img src={popfile} alt={colorCd, kindCd}/>
                </div>
                <div className="content_wrap">
                <p className="state">{processState}</p>
                <h3>{kindCd}<span>({colorCd, sexCd})</span></h3>
                <p>{age} / 체중 : {weight} </p>
                <p>특징 : {specialMark}</p>
                <p>{happenPlace}({orgNm})</p>
                </div>
            </a>
        </li>
    );
};

export default AnimalItem;