<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePostsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
    public function up()
    {
        Schema::create('posts', function(Blueprint $table)
        {
            $table->increments('id');

            $table->string('title');
            $table->longText('content');
            $table->boolean('live')->default(0);

            $table->timestamps();//creates timestamps for created and udpated at
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('posts');
    }

}
