import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

const ViewDetails = ({ onPress, type = 1 }) => {
  const renderContent = () => {
    switch (type) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <div className="text-4xl mb-4">🔥🔥🔥</div>
              <h2 className="text-2xl font-bold text-white mb-4">
                Good Behavior Clothing: Try On Haul
              </h2>
              <p className="text-2xl text-white mb-6">EMOJIS: 🛍️👕😂</p>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-white font-semibold mb-2">Caption:</h3>
                <p className="text-gray-300">
                  "Spreading good vibes with Good Behavior! 🛍️😄 #FashionReviewFun"
                </p>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-2">SEO-Optimized Hashtags:</h3>
                <div className="space-y-1 text-gray-300">
                  <p>#GoodBehaviorStyle</p>
                  <p>#FashionReview</p>
                  <p>#TryOnChallenge</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-3">VIDEO OUTLINE:</h3>
                <div className="space-y-4 text-gray-300">
                  <p>
                    "Hey [Influencer's Name]! Ready for some epic content that'll have your followers hooked? 
                    Let's combine your fans' interests with the latest trends and the awesome 'Good Behavior' brand."
                  </p>

                  <div>
                    <h4 className="font-bold text-white">Introduction</h4>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Start with a catchy greeting: "Hey fam! It's [Influencer's Name] back with another vibe check!"</li>
                      <li>Highlight the fashion and clothing review traits by showcasing a few trendy pieces from your wardrobe.</li>
                      <li>Inject humor by cracking a light joke related to fashion or lifestyle to keep the energy high.</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-white">Main Content:</h4>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Introduce the "Good Behavior" brand and its unique story (made from retired fishing boat sails).</li>
                      <li>Perform a quick try-on haul with the brand's items, giving your honest review.</li>
                      <li>Incorporate elements of the challenge trend by making it interactive – maybe ask your followers to rate your outfits.</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-white">Call-to-Action:</h4>
                    <p>
                      End with a call-to-action: "Tap that like button if you're loving these Good Behavior vibes! 🔥 
                      Don't forget to follow for more fashion fun! #GoodBehaviorStyle"
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-white">Closing:</h4>
                    <p>
                      Conclude with a positive and engaging sign-off: "Thanks for hanging out, beautiful people! 
                      Catch you in the next one. Stay stylish, stay positive! ✨👗"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <div className="text-4xl mb-4">🔥🔥🔥</div>
              <h2 className="text-2xl font-bold text-white mb-4">
                Good Behavior: How to Style the Rebel Weekender
              </h2>
              <p className="text-2xl text-white mb-6">EMOJIS: 😎👜✌</p>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-white font-semibold mb-2">Caption:</h3>
                <p className="text-gray-300">
                  "Unleash style with #GoodBehavior 🌟 Fashion, laughs, and lifestyle vibes!"
                </p>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-2">SEO-Optimized Hashtags:</h3>
                <div className="space-y-1 text-gray-300">
                  <p>#GoodBehaviorStyle</p>
                  <p>#FashionFunnies</p>
                  <p>#SailIntoStyle</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-3">VIDEO OUTLINE:</h3>
                <div className="space-y-4 text-gray-300">
                  <p>
                    "Hey [Influencer's Name]! 🌟 Ready to dive into a sea of style and laughter with your amazing followers? 
                    Here's a TikTok video idea tailored just for them:"
                  </p>

                  <div className="space-y-3">
                    <div>
                      <h4 className="font-bold text-white">Opening Shot:</h4>
                      <p>Start with a captivating shot of you wearing a trendy outfit from Good Behavior. Make it playful and showcase the fashion piece.</p>
                    </div>

                    <div>
                      <h4 className="font-bold text-white">Fashion Review & Styling Tips:</h4>
                      <p>Dive into a quick fashion review of the Good Behavior outfit. Highlight unique features made from retired fishing boat sails. Share styling tips and tricks – your fans love your fashion sense!</p>
                    </div>

                    <div>
                      <h4 className="font-bold text-white">Comedy Segment:</h4>
                      <p>Inject some humor! Maybe a quick funny dance or a light-hearted fashion-related joke. Keep it in line with your usual comedic style.</p>
                    </div>

                    <div>
                      <h4 className="font-bold text-white">Lifestyle Integration:</h4>
                      <p>Seamlessly integrate the outfit into your daily life. Show how it fits your lifestyle – whether you're on the go, hanging out with friends, or even doing a quick fashion runway in unexpected places.</p>
                    </div>

                    <div>
                      <h4 className="font-bold text-white">Current Trends Showcase:</h4>
                      <p>Address the latest TikTok trends related to styling and big bags. Incorporate these trends into your video to stay current and appeal to the broader TikTok community.</p>
                    </div>

                    <div>
                      <h4 className="font-bold text-white">Call-to-Action:</h4>
                      <p>Wrap up with a call-to-action. Encourage your followers to check out Good Behavior for more unique and sustainable fashion pieces. Maybe throw in a challenge or ask them to share their styling ideas using your suggested hashtags.</p>
                    </div>
                  </div>

                  <p className="italic">
                    Remember, feel free to add your personal touch and creativity to make it uniquely yours! 
                    Your audience loves your style and humor, so let those traits shine through. Can't wait to see your amazing video! 🚀 #GoCreate
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <div className="text-4xl mb-4">🔥🔥🔥</div>
              <h2 className="text-2xl font-bold text-white mb-4">
                Barbie Movie Makeup: Pink glam makeup tutorial
              </h2>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-white font-semibold mb-2">Caption:</h3>
                <p className="text-gray-300">
                  "Transforming into a real-life Barbie! 💖 Join me on this pink glam makeup journey from start to finish, 
                  and let's embrace our inner doll together! 🎀"
                </p>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-2">Tags:</h3>
                <div className="space-y-1 text-gray-300">
                  <p>#BarbieMakeup</p>
                  <p>#GlamTutorial</p>
                  <p>#PinkGlam</p>
                  <p>#DollInspired</p>
                  <p>#MakeupMagic</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-3">VIDEO OUTLINE:</h3>
                <div className="space-y-4 text-gray-300">
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-bold text-white">Introduction</h4>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Greet your audience with excitement.</li>
                        <li>Introduce the captivating Barbie glam makeup theme.</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold text-white">Showcasing the Products</h4>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Display and discuss the authentic, unfiltered makeup products.</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold text-white">Base Makeup</h4>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Apply foundation, concealer, and set the base.</li>
                        <li>Share tips and tricks for achieving a flawless base.</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold text-white">Eye Makeup</h4>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Create a Barbie-inspired eye look with pink eyeshadows.</li>
                        <li>Discuss blending and shaping techniques.</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold text-white">Doll-Like Features</h4>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Focus on contouring to enhance doll-like features.</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold text-white">Pink Lips</h4>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Apply a vibrant pink lipstick for the perfect Barbie pout.</li>
                        <li>Discuss lip care and application tips.</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold text-white">Final Touches and Hair</h4>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Complete the makeup look with final touches.</li>
                        <li>Optionally, share quick tips for a Barbie-inspired hairstyle.</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold text-white">Closing and Call-to-Action</h4>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Thank your viewers for joining the Barbie glam journey.</li>
                        <li>Encourage them to like, comment, and share the video.</li>
                        <li>Remind them to stay tuned for more captivating content.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return <div>Content not found</div>;
    }
  };

  return (
    <div className="h-full overflow-y-auto">
      <div className="p-8 relative">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={onPress}
          className="absolute top-4 right-4 p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors"
        >
          <X className="w-6 h-6 text-white" />
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto"
        >
          {renderContent()}
        </motion.div>
      </div>
    </div>
  );
};

export default ViewDetails;