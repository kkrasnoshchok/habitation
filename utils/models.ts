import moment, { Moment } from "moment";

// users model
type User = {
  email: string;
  greetingName: string;
  healthData?: {
    birthday?: Date;
    weight?: number;
    height?: number;
  };
  habits: {
    data: Habit[];
    streak?: number;
  };
  sawOnBoarding: boolean;
};

type Habit = {
  title: string;
  description: string;
  remind?: boolean;
  daysOfWeek?: Day[] | Day;
  timesOfDay: TimeOfDay;
};

enum Day {
  "Mon" = 1,
  "Tue" = 2,
  "Wed" = 3,
  "Thu" = 4,
  "Fri" = 5,
  "Sat" = 6,
  "Sun" = 7,
}

enum TimeOfDay {
  "Morning" = 1,
  "Afternoon" = 2,
  "Evening" = 3,
  "Anytime" = 4,
}
