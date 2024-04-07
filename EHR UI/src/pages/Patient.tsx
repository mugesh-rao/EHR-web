import Layout from "@/Layout/Layout";
import InsuranceCard from "@/components/Patient/InsuranceCard";

function Patient() {
  return (
    <Layout>
    <InsuranceCard
        insuranceProvider="Care Health"
        planName="Care Supreme Direct"
        additionalPlansCount={8}
        instantCoverDetails="Reduce waiting for high blood pressure care from 4 years to 30 days with Instant Cover rider"
        noRoomRentLimit="No Room Rent Limit"
        renewalBonus="₹7.5 lakh Renewal Bonus"
        unlimitedRestoration="Unlimited Restoration of cover"
        coverAmount={500000} // ₹5 Lakh
        cashlessHospitalsCount={277}
        monthlyPremium={615} // ₹615/month
        annualPremium={7378} // ₹7,378 annually
      />
          <InsuranceCard
        insuranceProvider="Care Health"
        planName="Care Supreme Direct"
        additionalPlansCount={8}
        instantCoverDetails="Reduce waiting for high blood pressure care from 4 years to 30 days with Instant Cover rider"
        noRoomRentLimit="No Room Rent Limit"
        renewalBonus="₹7.5 lakh Renewal Bonus"
        unlimitedRestoration="Unlimited Restoration of cover"
        coverAmount={500000} // ₹5 Lakh
        cashlessHospitalsCount={277}
        monthlyPremium={615} // ₹615/month
        annualPremium={7378} // ₹7,378 annually
      />    <InsuranceCard
      insuranceProvider="Care Health"
      planName="Care Supreme Direct"
      additionalPlansCount={8}
      instantCoverDetails="Reduce waiting for high blood pressure care from 4 years to 30 days with Instant Cover rider"
      noRoomRentLimit="No Room Rent Limit"
      renewalBonus="₹7.5 lakh Renewal Bonus"
      unlimitedRestoration="Unlimited Restoration of cover"
      coverAmount={500000} // ₹5 Lakh
      cashlessHospitalsCount={277}
      monthlyPremium={615} // ₹615/month
      annualPremium={7378} // ₹7,378 annually
    />    <InsuranceCard
    insuranceProvider="Care Health"
    planName="Care Supreme Direct"
    additionalPlansCount={8}
    instantCoverDetails="Reduce waiting for high blood pressure care from 4 years to 30 days with Instant Cover rider"
    noRoomRentLimit="No Room Rent Limit"
    renewalBonus="₹7.5 lakh Renewal Bonus"
    unlimitedRestoration="Unlimited Restoration of cover"
    coverAmount={500000} // ₹5 Lakh
    cashlessHospitalsCount={277}
    monthlyPremium={615} // ₹615/month
    annualPremium={7378} // ₹7,378 annually
  />
    </Layout>
  );
}

export default Patient;
