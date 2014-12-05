<?php

class PostTableSeeder extends Seeder {

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('posts')->delete();

        Post::create(array(

            'title'    => 'Example Post',
            'content'     => 'Hey this is just a test!'

    ));

    }
}

