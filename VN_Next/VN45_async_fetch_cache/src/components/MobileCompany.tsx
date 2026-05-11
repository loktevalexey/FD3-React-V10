import {CompanyData} from "@/src/data/CompanyData";

type MobileCompanyProps = {
    companyData: CompanyData;
}

export const MobileCompany = ( { companyData }:MobileCompanyProps ) => {

  console.log("rendering MobileCompany");

  return (
    <h1>
      Компания &laquo;{companyData.companyName}&raquo;
    </h1>
  );

};
