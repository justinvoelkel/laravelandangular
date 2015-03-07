<?php

class UserTableSeeder extends Seeder {

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->delete();

        User::create(array(

            'first_name'    => 'Justin',
            'last_name'     => 'Voelkel',
            'email'         => 'justin@justinvoelkel.me',
            'username'      => 'admin',
            'password'      => Hash::make('password') //hashes our password nicely for us

    ));

    }
}

