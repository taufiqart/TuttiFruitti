<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Faker\Factory as faker;
use Illuminate\Support\Arr;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Timesheet>
 */
class TimesheetFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        $faker = faker::create();
        return [
            'project_id' => $faker->numberBetween(1, 10),
            'todo_id' => $faker->numberBetween(1, 10),
            'time_span' => $faker->time(),
            'timer' => $faker->time(),
            'form' => $faker->dateTimeInInterval('-1 month')->format('Y-m-d'),
            'to' => $faker->dateTimeInInterval('-1 month')->format('Y-m-d'),
            'alasan' => $faker->word(),
        ];
    }
}
