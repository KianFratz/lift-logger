"use client";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Plus, Trash2 } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "./ui/select";

interface ExerciseSet {
  setNumber: number;
  reps: number;
  weight: number;
}

interface Exercise {
  name: string;
  category: string;
  sets: ExerciseSet[];
}

function WorkoutForm() {
  const [exercises, setExercises] = useState<Exercise[]>([
    {
      name: "",
      category: "",
      sets: [{ setNumber: 1, reps: 0, weight: 0 }],
    },
  ]);

  const addSet = (exerciseIndex: number) => {
    const updated = [...exercises];
    const newSetnumber = updated[exerciseIndex].sets.length + 1;
    updated[exerciseIndex].sets.push({
      setNumber: newSetnumber,
      reps: 0,
      weight: 0,
    });
    setExercises(updated);
  };
  const removeSet = (exerciseIndex: number, setIndex: number) => {
    const updated = [...exercises];
    // Keep every set whose index is not equal to setIndex
    updated[exerciseIndex].sets = updated[exerciseIndex].sets.filter((_, i) => i !== setIndex);
    // Renumber sets
    updated[exerciseIndex].sets.forEach((set, i) => {
      set.setNumber = i + 1
    })
    setExercises(updated)
  };

  return (
    <form action="" className="space-y-6 m-2">
      {exercises.map((exercise, exerciseIndex) => (
        <Card
          key={exerciseIndex}
          className="w-full sm:w-[700px] h-auto min-h-[200px]"
        >
          <CardHeader className="">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">Exercise</CardTitle>
              {exercises.length > 1 && (
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  // onClick={() => removeExercise(exerciseIndex)}
                  className="hover:bg-destructive/10 hover:text-destructive"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              )}
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4 ">
              <div className="space-y-2">
                <label htmlFor="" className="text-md">
                  Exercise Name
                </label>
                <input
                  type="text"
                  placeholder="Bench Press"
                  className="border-border bg-secondary flex mt-2 p-1.5 pl-4 rounded-md w-full"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="" className="text-md">
                  Category
                </label>

                <Select>
                  <SelectTrigger className="w-[180px] w-full mt-2  bg-secondary ">
                    <SelectValue placeholder="Select exercise category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Chest">Chest</SelectItem>
                    <SelectItem value="Back">Back</SelectItem>
                    <SelectItem value="Legs">Legs</SelectItem>
                    <SelectItem value="Shoulders">Shoulders</SelectItem>
                    <SelectItem value="Arms">Arms</SelectItem>
                    <SelectItem value="Core">Core</SelectItem>
                    <SelectItem value="Cardio">Cardio</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-4 mt-4">
              <label htmlFor="" className="text-md">
                Sets
              </label>

              {exercise.sets.map((set, setIndex) => (
                <div key={setIndex} className="flex gap-3 items-end mt-2">
                  <div className="flex-1 space-y-2">
                    <label htmlFor="" className="text-sm text-muted-foreground">
                      Set
                    </label>
                    <div className="grid grid-cols-2 gap-3 ">
                      <input
                        type="number"
                        placeholder="Reps"
                        className="border-border bg-secondary flex mt-2 p-1.5 pl-4 rounded-md w-full"
                      />
                      <input
                        type="number"
                        placeholder="Weight (lbs)"
                        className="border-border bg-secondary flex mt-2 p-1.5 pl-4 rounded-md w-full"
                      />
                    </div>
                  </div>
                  {exercise.sets.length > 1 && (
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => removeSet(exerciseIndex, setIndex)}
                      className="hover:bg-destructive/10 hover:text-destructive"
                    >
                      <Trash2 />
                    </Button>
                  )}
                </div>
              ))}

              <Button
                type="button"
                className="w-full border-border"
                onClick={() => addSet(exerciseIndex)}
              >
                <Plus />
                Add Set
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </form>
  );
}

export default WorkoutForm;
