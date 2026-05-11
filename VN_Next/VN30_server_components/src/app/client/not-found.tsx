import {PagesLinks} from "@/src/components/PagesLinks";

export default function NotFoundPage() {

    console.log("rendering NotFoundPage");

    return (
      <div>
        <PagesLinks/>
        <h1>This client is not found! Pick another one.</h1>
      </div>
    );
}
