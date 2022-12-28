<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Organization>
 */
class OrganizationFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'name' => fake()->name(),
            'industri' => fake()->word(),
            'address' => fake()->address(),
            'logo' => fake()->imageUrl(640, 480, 'animals', true),
            // 'tax_id' => fake()->name(),
            'currency' => fake()->currencyCode(),
            'start' => fake()->date(),
            'time_zone' => fake()->timezone(),
        ];
    }
}
