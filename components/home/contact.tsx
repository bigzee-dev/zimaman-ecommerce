import { Button } from 'components/ui/button';
import { Card, CardContent } from 'components/ui/card';
import { Input } from 'components/ui/input';
import { Label } from 'components/ui/label';
import { Textarea } from 'components/ui/textarea';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function ContactUs() {
  return (
    <div className="bg-neutral-900 p-4 md:p-8 md:py-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Contact Information Section */}
          <Card className="">
            <CardContent className="p-8">
              <h2 className="mb-8 text-2xl font-semibold text-gray-300">Contact Information</h2>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                    <Mail className="h-5 w-5 text-gray-800" />
                  </div>
                  <div>
                    <p className="text-gray-300">Email: jamse@example.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                    <Phone className="h-5 w-5 text-gray-800" />
                  </div>
                  <div>
                    <p className="text-gray-300">Phone: 1234 567890</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                    <MapPin className="h-5 w-5 text-gray-800" />
                  </div>
                  <div>
                    <p className="text-gray-300">
                      Address: 7398 Smoke Ranch Road
                      <br />
                      Las Vegas, Nevada 89128
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Form Section */}
          <Card className="">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-gray-300">
                      First Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="firstName"
                      placeholder="John"
                      className="border-gray-600 bg-white/5 focus:bg-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-gray-300">
                      Last Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="lastName"
                      placeholder="Deo"
                      className="border-gray-600 bg-white/5 focus:bg-white"
                    />
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-gray-300">
                      Subject <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="subject"
                      placeholder="Type your subject"
                      className="border-gray-600 bg-white/5 focus:bg-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-gray-300">
                      Phone <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="phone"
                      placeholder="Enter your phone"
                      className="border-gray-600 bg-white/5 focus:bg-white"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-gray-700">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Type your message"
                    rows={6}
                    className="resize-none border-gray-600 bg-white/5 focus:bg-white"
                  />
                </div>

                <Button
                  type="submit"
                  className="rounded-lg bg-neutral-200 px-8 py-3 font-medium text-gray-800 hover:bg-blue-700"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
