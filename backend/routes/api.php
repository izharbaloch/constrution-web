<?php

use App\Http\Controllers\admin\ArticleController;
use App\Http\Controllers\admin\DasboardController;
use App\Http\Controllers\Admin\MemberController;
use App\Http\Controllers\admin\ProjectController;
use App\Http\Controllers\admin\ServiceController;
use App\Http\Controllers\admin\TempImageController;
use App\Http\Controllers\Admin\TestimonialsController;
use App\Http\Controllers\AuthenticationController;
use App\Http\Controllers\front\ProjectController as FrontProjectController;
use App\Http\Controllers\front\ServiceController as FrontServiceController;
use App\Http\Controllers\front\ArticleController as FrontArticleController;
use App\Http\Controllers\Front\ContactController;
use App\Http\Controllers\front\TestimonialController as FrontTestimonialController;
use App\Http\Controllers\front\MemberCobtroller as FrontMemberController;
use Illuminate\Support\Facades\Route;

Route::post('contact-now', [ContactController::class, 'index']);

Route::post('authenticate', [AuthenticationController::class, 'authenticate']);

Route::get('get-services', [FrontServiceController::class, 'index']);
Route::get('get-letest-services', [FrontServiceController::class, 'latestServices']);
Route::get('get-service/{id}', [FrontServiceController::class, 'service']);

Route::get('get-projects', [FrontProjectController::class, 'index']);
Route::get('get-letest-projects', [FrontProjectController::class, 'latestProjects']);
Route::get('get-project/{id}', [FrontProjectController::class, 'project']);


Route::get('get-articles', [FrontArticleController::class, 'index']);
Route::get('get-letest-articles', [FrontArticleController::class, 'latestArticles']);
Route::get('get-article/{id}', [FrontArticleController::class, 'article']);


Route::get('get-testimonials', [FrontTestimonialController::class, 'index']);

Route::get('get-members', [FrontMemberController::class, 'index']);

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');
// prefix('admin')->
Route::group(['middleware' => ['auth:sanctum']], function () {
    // protected route
    Route::get('dashboard', [DasboardController::class, 'index']);
    Route::get('logout', [AuthenticationController::class, 'logout']);

    // Services Routes
    Route::post('services', [ServiceController::class, 'store']);
    Route::get('services', [ServiceController::class, 'index']);
    Route::put('services/{id}', [ServiceController::class, 'update']);
    Route::get('services/{id}', [ServiceController::class, 'show']);
    Route::delete('services/{id}', [ServiceController::class, 'destroy']);

    // Projects Route
    Route::post('projects', [ProjectController::class, 'store']);
    Route::get('projects', [ProjectController::class, 'index']);
    Route::put('projects/{id}', [ProjectController::class, 'update']);
    Route::get('projects/{id}', [ProjectController::class, 'show']);
    Route::delete('projects/{id}', [ProjectController::class, 'destroy']);

    // Articles routes
    Route::post('articles', [ArticleController::class, 'store']);
    Route::get('articles', [ArticleController::class, 'index']);
    Route::put('articles/{id}', [ArticleController::class, 'update']);
    Route::get('articles/{id}', [ArticleController::class, 'show']);
    Route::delete('articles/{id}', [ArticleController::class, 'destroy']);

    // testimonials routes
    Route::post('testimonials', [TestimonialsController::class, 'store']);
    Route::get('testimonials', [TestimonialsController::class, 'index']);
    Route::get('testimonials/{id}', [TestimonialsController::class, 'show']);
    Route::put('testimonials/{id}', [TestimonialsController::class, 'update']);
    Route::delete('testimonials/{id}', [TestimonialsController::class, 'destroy']);

    // members routes
    Route::post('members', [MemberController::class, 'store']);
    Route::get('members', [MemberController::class, 'index']);
    Route::get('members/{id}', [MemberController::class, 'show']);
    Route::put('members/{id}', [MemberController::class, 'update']);
    Route::delete('members/{id}', [MemberController::class, 'destroy']);




    // temp image routes
    Route::post('temp-images', [TempImageController::class, 'store']);
});
