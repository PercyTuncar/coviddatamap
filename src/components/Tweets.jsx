import React from 'react'
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';


function Tweets (){

    return (
        <>
        
            <div class="ed-grid m-grid-3">
            
                        <div className="selfCenter spaceBetween standardWidth">
                            <TwitterTimelineEmbed
                            sourceType="timeline"
                            sourceType="profile"
                            screenName="Minsa_Peru"
                            theme="dark"
                            noHeader
                            options={{height: 400}}
                            noBorders
                            noScrollbar
                            />
                        </div>
                


                
                        <div className="selfCenter spaceBetween standardWidth">
                            <TwitterTimelineEmbed
                            sourceType="timeline"
                            sourceType="profile"
                            screenName="presidenciaperu"
                            theme="dark"
                            noHeader
                            options={{height: 400}}
                            noBorders
                            noScrollbar
                            />
                        </div>
                
                
                
                        <div className="selfCenter spaceBetween standardWidth">
                            <TwitterTimelineEmbed
                            sourceType="timeline"
                            sourceType="profile"
                            screenName="DiarioElPeruano"
                            theme="dark"
                            noHeader
                            options={{height: 400}}
                            noBorders
                            noScrollbar
                            />
                        </div>
                
            </div>



        </>
    )
}

export default Tweets