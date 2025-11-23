<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::create([
            'first_name' => 'Test',
            'last_name' => 'User',
            'email' => 'test@example.com',
            'password' => Hash::make('password'),
            'mobile' => '0700000000',
            'profile' => 'admin',
        ]);
        User::create([
            'first_name' => 'Agent',
            'last_name' => '47',
            'email' => 'agent.47@example.com',
            'password' => Hash::make('password'),
            'mobile' => '0700000001',
            'profile' => 'agent',
        ]);
        User::create([
            'first_name' => 'Ministère',
            'last_name' => '47',
            'email' => 'ministry.47@example.com',
            'password' => Hash::make('password'),
            'mobile' => '0700000002',
            'profile' => 'ministry',
    ]);
    }
}
