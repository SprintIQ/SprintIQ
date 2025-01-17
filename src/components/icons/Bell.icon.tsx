import * as React from "react";

type IBell = React.SVGAttributes<SVGElement>;

const Bell: React.FC<IBell> = props => {
    return (
        <svg
            {...props}
            width="21" height="25" viewBox="0 0 21 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M2.33333 18.6047H18.6667V10.5012C18.6667 5.98605 15.0103 2.32558 10.5 2.32558C5.98967 2.32558 2.33333 5.98605 2.33333 10.5012V18.6047ZM10.5 0C16.2983 0 21 4.70116 21 10.5012V20.9302H0V10.5012C0 4.70116 4.70167 0 10.5 0ZM7.58333 22.093H13.4167C13.4167 22.864 13.1094 23.6034 12.5624 24.1486C12.0154 24.6937 11.2735 25 10.5 25C9.72645 25 8.98459 24.6937 8.4376 24.1486C7.89062 23.6034 7.58333 22.864 7.58333 22.093Z"
                fill="black"/>
        </svg>

    );
};
export default Bell;
