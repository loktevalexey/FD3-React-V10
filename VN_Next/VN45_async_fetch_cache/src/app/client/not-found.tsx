import {PagesLinks} from "@/src/components/PagesLinks";

export default async function ClientNotFoundPage() {

    console.log("rendering ClientNotFoundPage");

    return (
      <div>
        <PagesLinks/>
        <h1>This client is not found! Pick another one.</h1>
      </div>
    );
}
