import Layout from '@components/Layout'
import React from 'react'

function Disclaimer() {
    return (
        <Layout>

            <div className="flex flex-col text-white gap-6 mx-auto h-max ls:w-[360px] pb-10">

                <div className='pt-[100px] font-bold'>{"Disclaimer :"}</div>
                <div>This website is a fan-made platform focused on the game Free Fire. It is created purely for entertainment and informational purposes and is not affiliated with Garena, Free Fire, or any of its official developers or partners.
                </div>
                <div>All references to Free Fire game elements including names, logos, assets, or in-game currency like Diamonds are the property of their respective owners. They are used here in a fair and respectful manner to share knowledge and content with fans.
                </div>
                <div>We do not provide or promise any real Diamonds, items, or rewards. This website does not conduct any actual transactions, and no purchases can be made through this platform. Any content related to Diamonds or in-game items is fictional or simulated, and meant purely for fun and general information.
                </div>
                <div>We may display advertisements on this website to support its maintenance and content. However, we still do not collect any user data, passwords, payment details, or personal information.
                </div>
                <div>Visitors are advised to treat this website as a fan-driven, playful project, and not a source for any real in-game currency or benefits. 
                </div>
                <div>{"For any questions or concerns, feel free to contact us at contact@sprintpixel.com."}</div>

            </div>

        </Layout>
    )
}

export default Disclaimer
