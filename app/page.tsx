import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BarChart, Dumbbell, History } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-40 text-center">
        <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
          Track Your Strength Journey
        </h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          The simplest way to log your workouts, track progress, and crush your
          fitness goals. Beautiful charts, detailed history, all in one place
        </p>
        <div className="flex-gap-4 justify-center ">
          <Button>
            <Link href={"/signin"}>Start Logging Free</Link>
          </Button>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <Dumbbell className="h-12 w-12 text-primary mb-2" />
              <CardTitle>Easy Workout Logging</CardTitle>
              <CardDescription>
                Quickly log exercises, sets, reps, and weight. Add nots to track
                how you felt
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <BarChart className="h-12 w-12 text-primary mb-2" />
              <CardTitle>Visual Progress</CardTitle>
              <CardDescription>
                Beautiful charts showing workout frequency, volume by muscle
                group, and exercise progression
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <History className="h-12 w-12 text-primary mb-2" />
              <CardTitle>Complete History</CardTitle>
              <CardDescription>
                Never forget a workout. Browse your complete history and track
                improvements over
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* CTA section */}
      <section className="container mx-auto px-4 py-12">
        <Card className="bg-gradient-to-r from-primary/10 to-primary-glow/10 border-primary/20">
          <CardHeader>
            <CardTitle className="text-3xl">Ready to Get Stronger?</CardTitle>
            <CardDescription className="text-lg mb-4">
              Join thousands of Lifters tracking their progress with Lift
              Logger.
            </CardDescription>
            <Button size="lg"><Link href={"/signup"}>Start Your Journey</Link></Button>
          </CardHeader>
        </Card>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 border-t border-border mt-20">
        <div className="text-center text-muted-foreground">
          &copy; {new Date().getFullYear()} Lift Logger. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
