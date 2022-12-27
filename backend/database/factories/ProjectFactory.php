<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Faker\Factory as faker;
use Illuminate\Support\Arr;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Project>
 */
class ProjectFactory extends Factory
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
            'name' => $faker->name(),
            'description' => $faker->paragraph(),
            'client_id' => $faker->numberBetween(1, 10),
            'pay_type' => Arr::random(['Total cost','Total hours']),
            'status' => Arr::random(['0','1']),
            'start_date' => $faker->date(),
        ];
    }
}
