<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\User::factory(10)->create();
        \App\Models\Client::factory(10)->create();
        \App\Models\Project::factory(10)->create();
        \App\Models\CategoryTodo::factory(10)->create();
        \App\Models\Todo::factory(10)->create();
        \App\Models\Cheklists::factory(10)->create();
        \App\Models\CommentTodo::factory(10)->create();
        \App\Models\Timesheet::factory(10)->create();
        \App\Models\Url::factory(10)->create();
        \App\Models\App::factory(10)->create();
        \App\Models\Screenshot::factory(10)->create();
        \App\Models\Note::factory(10)->create();
        \App\Models\Team::factory(10)->create();
        \App\Models\Attachment::factory(10)->create();

        \App\Models\User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
            'email_verified_at' => now(),
        ]);

    }
}
