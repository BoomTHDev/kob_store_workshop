import InputForm from "@/components/shared/input-form";
import SubmitBtn from "@/components/shared/submit-btn";
import { CardContent, CardFooter } from "@/components/ui/card";
import Form from "next/form";
import { resetPasswordAction } from "../actions/auths";

interface ResetPasswordFormProps {
  token: string;
}

const ResetPasswordForm = ({ token }: ResetPasswordFormProps) => {
  return (
    <Form action={resetPasswordAction}>
      <input type="hidden" name="token" value={token} />
      <CardContent className="flex flex-col gap-4">
        <div>
          <InputForm
            label="รหัสผ่านใหม่"
            id="password"
            type="password"
            required
          />
        </div>
        <div>
          <InputForm
            label="ยืนยันรหัสผ่าน"
            id="confirm-password"
            type="password"
            required
          />
        </div>
      </CardContent>

      <CardFooter className="pt-6">
        <SubmitBtn name="เปลี่ยนรหัสผ่าน" className="w-full" />
      </CardFooter>
    </Form>
  );
};

export default ResetPasswordForm;
