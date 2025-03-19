import { useForm } from "react-hook-form";
import Img from "../assets/contact_img.png";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "../components/ui/form";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { formSchema } from "../schemas/zodShcema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "./ui/button";
import sendMail from "../Services/emailService";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ContactUsSection = () => {
  const navigate = useNavigate();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      const response = await sendMail(data);
      toast.success(response.data.message);
      console.log("Email sent successfully");
      form.reset();
      navigate("/home");
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behaviour: "smooth",
        });
      }, 2000);
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center gap-4 py-6 my-4 w-full max-w-[1440px] mx-auto">
      <h2 className="text-titleText text-2xl font-title font-semibold text-center">
        CONTACT
      </h2>
      <div className="flex flex-col gap-4 px-6 py-4 items-center justify-between md:flex-row w-full ">
        <div className="flex w-full md:basis-[40%]">
          <img className="object-cover" src={Img} alt="Connect with us" />
        </div>
        <div className="md:basis-[60%] w-full flex flex-col justify-between items-start gap-4 ">
          <h3 className="text-titleText font-medium text-xl font-pop mb-2">
            Get in Touch with us anytime
          </h3>
          <Form {...form}>
            <form
              className="w-full flex flex-col gap-2"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-titleText text-sm font-pop font-semibold">
                      Enter Your Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="placeholder:text-lg placeholder:text-pop placeholder:text-gray-400 text-lg text-pop text-titleText"
                        placeholder="Rakesh Paul"
                        {...field}
                      />
                    </FormControl>

                    {form.formState.errors.name && (
                      <FormMessage>
                        {form.formState.errors.name.message}
                      </FormMessage>
                    )}
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Enter Your Email</FormLabel>
                    <FormControl>
                      <Input
                        className="placeholder:text-lg placeholder:text-pop placeholder:text-gray-400 text-lg text-pop text-titleText"
                        placeholder="rakeshpaul@gmail.com"
                        {...field}
                      />
                    </FormControl>

                    {form.formState.errors.email && (
                      <FormMessage>
                        {form.formState.errors.email.message}
                      </FormMessage>
                    )}
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Enter Your Message</FormLabel>
                    <FormControl>
                      <Textarea
                        className="placeholder:text-lg placeholder:text-pop placeholder:text-gray-400 text-lg text-pop text-titleText"
                        rows={5}
                        cols={10}
                        placeholder="Hi there..."
                        {...field}
                      />
                    </FormControl>
                    {form.formState.errors.message && (
                      <FormMessage>
                        {form.formState.errors.message.message}
                      </FormMessage>
                    )}
                  </FormItem>
                )}
              />
              <Button
                className="font-menuFont text-lg bg-primaryColor hover:bg-btnHover text-white px-8 py-2"
                type="submit"
              >
                Submit
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ContactUsSection;
