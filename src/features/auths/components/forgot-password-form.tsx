import InputForm from "@/components/shared/input-form";
import SubmitBtn from "@/components/shared/submit-btn";
import { CardContent, CardFooter } from "@/components/ui/card";
import Form from "next/form";
import { forgotPasswordAction } from "../actions/auths";

const ForgotPasswordForm = () => {
  return (
    <Form action={forgotPasswordAction}>
      <CardContent>
        <InputForm label="อีเมล" id="email" type="email" required />
      </CardContent>
      <CardFooter className="pt-6">
        <SubmitBtn name="ส่งลิงก์เพื่อรีเซ็ตรหัสผ่าน" className="w-full" />
      </CardFooter>
    </Form>
  );
};

export default ForgotPasswordForm;
