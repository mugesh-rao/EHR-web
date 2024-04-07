import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Layouts from "../Layout/Layouts";
import { AdsCarousel } from "../Components/Home/AdsCaurosel";
import { Container } from "../Layout/Container";
import InsuranceCard, {
  FertilizerCard,
  FruitCard,
  ProductCard,
} from "../Components/Home/Products";
import axios from "axios";
function Home() {
  const [users, setUsers] = useState([]);
  async function fetchUsers() {
    try {
      const response = await axios.get("http://localhost:1000/Insurance");
      setUsers(response.data);
      console.log(response);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  }
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <Layouts>
      <Container>
        {/* <AdsCarousel /> */}

        <SectionTitle title="Insurance" />

        <div className="grid grid-cols-1 gap-3">
          {users.map((user, index) => (
            <Link to={`/insurance/${user._id}`} key={index}>
              <InsuranceCard
                key={user.id}
                insuranceProvider={user.policyName}
                
                planName={user.policyType}
                additionalPlansCount={8}
                instantCoverDetails="Reduce waiting for high blood pressure care from 4 years to 30 days with Instant Cover rider"
                noRoomRentLimit="No Room Rent Limit"
                renewalBonus="₹7.5 lakh Renewal Bonus"
                unlimitedRestoration="Unlimited Restoration of cover"
                coverAmount={user.premium.amount} // ₹5 Lakh
                cashlessHospitalsCount={277}
                monthlyPremium={615} // ₹615/month
                annualPremium={7378} // ₹7,378 annually
              />
            </Link>
          ))}
        </div>

        <section class="mx-auto  w-full max-w-screen-xl px-4 my-6 ">
          <div class="flex flex-col sm:flex-row items-center rounded-xl bg-slate-500 px-8 text-white shadow-lg py-6">
            <div class="w-full px-4 sm:w-1/2">
              <span class="mb-2 text-base font-semibold text-gray-200">
                Grow Guard
              </span>
              <h2 class="mb-6 text-2xl font-bold leading-tight text-gray-100 sm:text-3xl lg:text-4xl">
                Get Insurance Now{" "}
              </h2>
            </div>

            <div class="w-full px-4 sm:w-1/2">
              <div class="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 lg:justify-end">
                <div>
                  <span class="my-1 cursor-pointer inline-block rounded-md border border-gray-100 hover:bg-white  hover:text-black hover:rounded-xl bg-info py-4 px-6 text-base font-medium text-gray-100 transition hover:bg-opacity-90 md:px-9 lg:px-6 xl:px-9">
                    Browse Insurance
                  </span>
                </div>
                <div>
                  <span class="my-1 cursor-pointer rounded-md items-center justify-center  inline-block hover:rounded-2xl bg-white py-4 px-6 text-base font-medium text-black transition hover:bg-opacity-90 md:px-9 lg:px-6 xl:px-9">
                    Claim Now
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </Layouts>
  );
}

const SectionTitle = ({ title }) => (
  <h1 className="text-center font-sans text-3xl font-bold text-gray-900">
    {title}
    <span className="text-slate-600">.</span>
  </h1>
);

export default Home;
