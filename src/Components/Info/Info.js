import React from 'react';
import Accordian from '../Accordian/Accordian';
import "./Info.css";
import image from "../../assets/jane.jpg"
import nature1 from "../../assets/nature-1.jpg";
import nature2 from "../../assets/nature-2.jpg";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CommentIcon from '@mui/icons-material/Comment';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import InstagramIcon from '@mui/icons-material/Instagram';
import Wecare from '../Wecare/Wecare';
import Whychooseus from '../Whychooseus/Whychooseus';
import Feedback from '../Feedback/Feedback';

function Info() {
    return (
        <section className='info'>
            <div className='gap'></div>
            <div className='pad'>
                <div className='row'>
                    <div className='heading'>
                        <h2>Table Of Content</h2>
                        <div className='sub-h'>
                            <ul>
                                <li><a className='Black-l' href="#About Havelock Island" >About Havelock Island</a></li>
                                <li><a className='Black-l' href="" >How long to stay in Havelock?</a></li>
                                <li><a className='Black-l' href="" >When to visit Swaraj Dweep? (Havelock)</a></li>
                                <li><a className='Black-l' href="" >How to Reach Havelock?</a></li>
                                <li><a className='Black-l' href="" >Directorate of Shipping Services</a></li>
                                <li><a className='Black-l' href="" >Getting Around in Havelock</a></li>
                                <li><a className='Black-l' href="" >Top things to do in Swaraj Dweep (Havelock)</a></li>
                                <li><a className='Black-l' href="" >Hotels & Resorts in Swaraj Dweep (Havelock)</a></li>
                                <li><a className='Black-l' href="" >Eat/ Dine/ Night Life in Havelock</a></li>
                                <li><a className='Black-l' href="" >Important info about Havelock</a></li>
                                <li><a className='Black-l' href="" >Cost in Havelock (Swaraj Dweep)</a></li>
                                <li><a className='Black-l' href="" >FAQs about Havelock</a></li>
                            </ul>
                        </div>
                        <h2 id='About Havelock Island'>About Havelock Island</h2>
                        <div className='info-1'>
                            <p><span>
                                Havelock in short, is paradise. It’s an island tucked away from the crowds in the warm waters
                                of the Andaman Ocean. The island is covered mostly in dense jungle and fringed with white sandy beaches
                                shaded by tall green trees. Diving in the crystal clear waters with shades of turquoise blue an experience
                                that all must explore. Tourists simply love its picture perfect beaches, laid back vibe and amazing underwater
                                world.
                            </span></p>
                            <p><span>
                                As far as islands in the Andamans go, Havelock is definitely the most tourism friendly and
                                consequently the most visited. There are all sorts of accommodation options from bamboo cottages
                                to luxury villas, great multinational cuisine restaurants, souvenir shops, ATMs and now even
                                (slow but accessible) Internet cafés. You’ll find almost everything you need here, but at a
                                slower pace. And even though it is one of the most visited islands in the Andamans it sees only
                                a fraction of the visitors that crowd other paradise destinations around the globe.
                            </span></p>
                        </div>
                        <h2 id='How-long'>How long to stay in Havelock?</h2>
                        <div className='info-1'>
                            <p>As a part of most travel itineraries, the place is known for the magnificent Radhanagar Beach, Elephanta Beach, Kalapathar beach, and <a className='green-l' href='#'>water sports</a> like Scuba Diving, Snorkeling, Kayaking.
                                Hence, we recommend a minimum of a two-night stay at Swaraj Dweep(Havelock Island) and a comfortable three nights too if time permits.</p>
                        </div>
                        <h2>How to Reach Havelock?</h2>
                        <div className='info-1'>
                            <p><span>Havelock Island can be reached by Sea and by Air, however, the easiest way to travel to Havelock would be by the Sea.
                                Private and Government ferries operate from neighboring islands (Port Blair and Neil Island). However, we recommend private ferries,
                                as the booking is hassle-free and doesn’t
                                require waiting in line, the same can be booked through us for an easy and worry-free experience.
                            </span></p>
                            <div className='box'>
                                <div className='head'>
                                    <div className='avatar'>
                                        <img src={image}
                                            alt='nmm' />
                                    </div>
                                    <div className='head-txt'>
                                        <b>cloudme001</b>
                                        <div className='sec-txt'>
                                            <p>India</p>
                                        </div>
                                    </div>
                                    <div className='head-btn'>
                                        <button className='btn'>View Profile</button>
                                    </div>
                                </div>
                                <div className='pic'>
                                    <img src={nature1}
                                        alt='nhh' />
                                </div>
                                <div>
                                    <a className='blue-l' href='#'><p>View more on Instagram</p></a>
                                </div>
                                <div className='border'></div>
                                <div className='icons'>
                                    <FavoriteBorderIcon className='icon' />
                                    <CommentIcon className='icon' />
                                    <SaveAltIcon className='icon' />
                                    <BookmarkIcon className='icon' />
                                    <p>51 likes</p>
                                </div>
                                <div className='border'></div>
                                <div className='comment'>
                                    <p>Add a comment...</p>
                                    <InstagramIcon />
                                </div>
                            </div>
                            <div className='paragraph'>
                                <p><span>
                                    A few private ferry companies that sail to havelock Island been listed below:
                                </span></p>
                                <ul>
                                    <a href='#' className='yellow-l'><li>Makruzz Ferry</li></a>
                                    <a href='#' className='yellow-l'><li>ITT Majestic Ferry</li></a>
                                    <a href='#' className='yellow-l'><li>Sealink Ferry</li></a>
                                    <a href='#' className='yellow-l'><li>Green Ocean Ferry</li></a>
                                    <a href='#' className='yellow-l'><li>Aashi Ferry</li></a>
                                </ul>
                                <a href="#" className='green-l'>Please click here for ferry timing and booking</a>
                            </div>
                        </div>
                        <h2>Directorate of Shipping Services</h2>
                        <div className='border'></div>
                        <div className='info-1'>
                            <p><strong>Government-run boats are the lifeline for locals of Andaman.</strong>
                                They connect almost all islands in the Andaman Islands (including the Nicobar group of islands). Bookings can only be made from the counters mentioned below.</p>
                            <ul >
                                <li className='orange'><b>Port Blair</b> – Phoenix Bay Jetty & Common Service Centers located around the town</li>
                                <li className='orange'><b>Havelock Island</b> – Havelock Jetty</li>
                                <li className='orange'><b>Neil Island</b> – Neil Jetty</li>
                            </ul>
                        </div>
                        <div className='border'></div>
                        <h4>Getting Around in Havelock</h4>
                        <div className='info-1'>
                            <p><span>Local transport in Swaraj Dweep (Havelock Island) is fairly simple. Roads are well set and straight.
                                It is almost impossible to get lost as everything is just by the road and the locals are all very helpful.
                                It also helps that Havelock’s beaches and villages are categorized with the help of numbers.</span></p>
                            <p><span>These are a few options we recommend:</span></p>
                            <h4>1. Tourist Taxis:</h4>
                            <p><span>Tourist taxis can be rented from Havelock jetty, there will be drivers waiting at the jetty, please be aware that they might be overpriced and you might have to bargain.
                                If you are part of a package tour, it will be included in the package.</span></p>
                            <h4>2. Bike Rentals:</h4>
                            <p><span>The easiest local transport in Havelock Island is by renting a scooter.
                                You can hire them on a daily basis at approximately INR 500 per day. Fuel Stations shut by 5 pm, please make sure you have enough fuel.
                                Avoid during monsoons as roads can get slippery.</span></p>
                            <h4>3. Auto Rickshaws:</h4>
                            <p><span>Auto-rickshaws are also available and cost around INR 50 to 200 for short rides & 700-1000 for a trip to Radhanagar Beach.</span></p>
                            <h4>4. Public Transport:</h4>
                            <p><span>Budget travelers can opt for shared jeeps and public buses for the commute within Swaraj Dweep(Havelock Island).</span></p>
                        </div>

                        <h4>Top things to do in Swaraj Dweep (Havelock)</h4>
                        <div className='info-1'>
                            <p><span>Havelock is known for its pristine beaches, crystal clear waters, and a variety of water sports that it has to offer.
                                All thanks to the variety of activities the island has to offer, Havelock Island is a fun magnet that attracts anybody paying a visit to the Andaman Islands.
                                Here are a few more things to do on Havelock Island.</span></p>
                            <div className='box'>
                                <div className='head'>
                                    <div className='avatar'>
                                        <img src={image}
                                            alt='nmm' />
                                    </div>
                                    <div className='head-txt'>
                                        <b>cloudme001</b>
                                        <div className='sec-txt'>
                                            <p>India</p>
                                        </div>
                                    </div>
                                    <div className='head-btn'>
                                        <button className='btn'>View Profile</button>
                                    </div>
                                </div>
                                <div className='pic'>
                                    <img src={nature2}
                                        alt='nhh' />
                                </div>
                                <div>
                                    <a className='blue-l' href='#'><p>View more on Instagram</p></a>
                                </div>
                                <div className='border'></div>
                                <div className='icons'>
                                    <FavoriteBorderIcon className='icon' />
                                    <CommentIcon className='icon' />
                                    <SaveAltIcon className='icon' />
                                    <BookmarkIcon className='icon' />
                                    <p>51 likes</p>
                                </div>
                                <div className='border'></div>
                                <div className='comment'>
                                    <p>Add a comment...</p>
                                    <InstagramIcon />
                                </div>
                            </div>
                            <a href='#' className='green-l'><h2>1.Kayaking</h2></a>
                            <img src='https://ocean.go2andaman.com/wp-content/uploads/2021/05/4506312_orig-1.jpg?compress=true&quality=90&w=900&dpr=1.3'
                                alt='mm' height="700px" width="950px" />
                            <p><span>Kayak your way through the beautiful mangrove forests, one can also club kayaking with snorkeling or take a night kayaking tour.
                                One doesn’t have to be a swimming expert, any beginner can enjoy this fun activity. We recommend Kayaking with a certified instructor, Tanaz for a fun-filled experience.
                                This activity costs around INR 3000 onwards.</span></p>
                            <a href='#' className='green-l'><h2>2. Candlelight Dinner</h2></a>
                            <img src="https://ocean.go2andaman.com/wp-content/uploads/2021/05/candle-light-dinner-munjoh3.jpg?compress=true&quality=90&w=900&dpr=1.3"
                                alt='mm' height="700px" width="950px" />
                            <p><span>Treat your loved one to a romantic candlelight dinner under the stars.
                                Havelock Island beach resort, wild orchid resort, Munjoh resort offer a magical candlelight dinner experience.</span></p>
                            <a href='#' className='green-l'><h2>3. Scuba Diving</h2></a>
                            <img src="https://ocean.go2andaman.com/wp-content/uploads/2021/05/DiveIndiaDSD-Havelock-Andaman4.jpg?compress=true&quality=90&w=900&dpr=1.3"
                                alt='mm' height="700px" width="950px" />
                            <p><span>Havelock Island is very well known for its scuba diving experience with the best infrastructure.
                                Andamans is one of the best spots for Scuba Diving. For an amazing experience, do book with us.</span></p>
                            <a href='#' className='green-l'><h2>4. Shopping</h2></a>
                            <img src="https://ocean.go2andaman.com/wp-content/uploads/2021/05/Anthropology-museum_0001_DSC_8450.jpg?compress=true&quality=90&w=900&dpr=1.3"
                                alt='mm' height="700px" width="950px" />
                            <p><span>Shop some lovely souvenirs for your loved ones back home at Seven Heaven, this lifestyle store is a shoppers paradise.
                                Handpicked, designer clothing and jewelry make for perfect gifts.</span></p>
                            <a href='#' className='green-l'><h2>5. Elephant Beach</h2></a>
                            <img src="https://ocean.go2andaman.com/wp-content/uploads/2021/05/Anthropology-museum_0001_DSC_8450.jpg?compress=true&quality=90&w=900&dpr=1.3"
                                alt='mm' height="700px" width="950px" />
                            <p><span>This place is a shallow water haven for snorkelers.
                                All thanks to an impressive number of Scuba divers who have educated the locals on the importance of reef conservation,
                                the reefs here are increasing, unlike most islands where reefs are drastically decreasing.</span></p>
                            <p><span>One can reach here either by a speedboat ride or by a short 1.8 km trek through the beautiful mangrove forest to reach Elephanta beach.
                                This trek is guided by a professional guide and usually takes about 30-45 minutes to complete. Water sports are also conducted at this beach.</span></p>
                            <a href='#' className='green-l'><h2>6. Game Fishing</h2></a>
                            <img src="https://ocean.go2andaman.com/wp-content/uploads/2021/05/IMG-20170207-WA0003.jpg?compress=true&quality=90&w=900&dpr=1.3"
                                alt='mm' height="700px" width="950px" />
                            <p><span>Set off on an exclusive fishing adventure in the great Andaman Sea.
                                The duration of this activity is around 2-4 hours. Cruise along the sea and learn how to fish, right from scratch.</span></p>
                        </div>
                        <h2>FAQs about Havelock</h2>
                        <Accordian />
                        
                    </div>

                    <div className='right-div'>
                        <h3><strong>Popular Tourist Islands</strong></h3>
                        <ul>
                            <li>Port Blair – Capital City</li>
                            <li>Havelock Island</li>
                            <li>Neil Island</li>
                            <li>Baratang</li>
                        </ul>
                        <h3><strong>About Andaman Islands</strong></h3>
                        <ul>
                            <li>Entry Formalities</li>
                            <li>Geography</li>
                            <li>Flora & Fauna</li>
                            <li>Tourists Do’s & Dont’s</li>
                            <li>How Safe is Andaman?</li>
                        </ul>
                        <h3><strong>Popular Places to Visit</strong></h3>
                        <ul>
                            <li>Cellular Jail</li>
                            <li>Ross Island</li>
                            <li>Radhanagar Beach</li>
                            <li>Jolly Buoy</li>
                            <li>North Bay</li>
                            <li>Natural Rock Bridge</li>
                            <li>Neil Island</li>
                            <li>Barren Island</li>
                        </ul>
                    </div>
                </div>
                
                <div className=''></div>
            </div>
            <Wecare />
            <Whychooseus />
            <Feedback />
        </section>
    )
}

export default Info