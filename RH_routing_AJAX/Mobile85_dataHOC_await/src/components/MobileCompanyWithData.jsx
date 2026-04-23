import MobileCompany from './MobileCompany';
import { withDataLoad } from '../HOC/withDataLoad';

const fetchConfig={
  URL: "http://fe.it-academy.by/TestFetch.php",
  method: 'post',
  headers: {
      "Accept": "application/json",
  },
};

const MobileCompanyWithData=withDataLoad(fetchConfig,"companyData")(MobileCompany);

export default MobileCompanyWithData;
