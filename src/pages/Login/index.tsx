
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import AccentSVG from "@/assets/accent.svg";


import PageWrapper from "@/layouts/PageWrapper";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const Login = () => {


  const formSchema = z.object({
    email: z.string().email("Please enter a valid email address."),
    password: z.string().min(6, "Password must be at least 6 characters long."),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <PageWrapper title="Login">
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="flex w-full h-full">
          <div className="relative w-1/2 h-full bg-[#C80909]">
            <img src={AccentSVG} alt="Accent Graphic" className="absolute inset-0 w-full h-full object-cover" />{" "}
            {/* <img src={AccentSVG} alt="Accent Graphic" className="absolute inset-0 w-full h-full object-cover" />{" "}
            <img src={AccentSVG} alt="Accent Graphic" className="absolute inset-0 w-full h-full object-cover" />{" "} */}
          </div>
          <div className="w-1/2 h-full flex flex-col items-center justify-center p-8">
            <div className="flex flex-col items-start w-full max-w-md gap-8">
              <div className="space-y-3">
                <h1 className="text-4xl">Login to your account</h1>
                <p className="text-gray-500">Please login to your account</p>
              </div>
              <div className="w-full">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Adress</FormLabel>
                          <FormControl>
                            <Input placeholder="example@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Password</FormLabel>
                          <FormControl>
                            <Input type="password" placeholder="******" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" className="w-full" variant="default">Sign In</Button>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Login;
