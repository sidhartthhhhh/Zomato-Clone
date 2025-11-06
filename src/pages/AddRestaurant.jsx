import AddRestaurantHeader from "../components/AddRestaurantComponents/AddRestaurantHeader";
import WhyShouldYouPWZ from "../components/AddRestaurantComponents/WhyShouldYouPWZ";
import HowItWorks from "../components/AddRestaurantComponents/HowItWorks";
import SearchListedRestaurant from "../components/AddRestaurantComponents/SearchListedRestaurant";
import SmallBannerCard from "../utils/Cards/SmallBannerCard/SmallBannerCard";
import FrequentlyAskedQues from "../components/Home/FrequentlyAskedQues";
import AddRestaurantSec from "../components/AddRestaurantComponents/AddRestaurantSec";
import Footer from "../components/Footer/Footer";

let AddRestaurant = () => {
  return (
    <div>
      <AddRestaurantHeader />
      <WhyShouldYouPWZ />
      <HowItWorks />
      <SearchListedRestaurant />
      <SmallBannerCard />
      <FrequentlyAskedQues />
      <AddRestaurantSec />
      <Footer />
    </div>
  );
};

export default AddRestaurant;
