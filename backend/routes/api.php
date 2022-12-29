<?php

use App\Http\Controllers\AppController;
use App\Http\Controllers\AttachmentController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CategoryTodoController;
use App\Http\Controllers\CheklistsController;
use App\Http\Controllers\ClientController;
use App\Http\Controllers\CommentTodoController;
use App\Http\Controllers\EmailVerificationController;
use App\Http\Controllers\NoteController;
use App\Http\Controllers\OrganizationController;
use App\Http\Controllers\OrganizationProjectController;
use App\Http\Controllers\OrganizationTeamController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\ScreenshotController;
use App\Http\Controllers\TeamController;
use App\Http\Controllers\TeamProjectController;
use App\Http\Controllers\TimesheetController;
use App\Http\Controllers\TodoController;
use App\Http\Controllers\UrlController;
use App\Http\Controllers\UserOrganizationController;
use App\Http\Controllers\UserProjectController;
use App\Http\Controllers\UsersTeamController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum','verified')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('login', [AuthController::class,'login'])->name('login');
Route::post('register', [AuthController::class,'register']);
Route::post('logout', [AuthController::class,'logout'])->middleware('auth:sanctum');
Route::post('email/verification-notification', [EmailVerificationController::class, 'sendEmailVerification'])->middleware('auth:sanctum');
Route::get('verify-email/{id}/{hash}', [EmailVerificationController::class, 'verify'])->name('verification.verify')->middleware('auth:sanctum');

Route::resource('app', AppController::class);
Route::resource('attachment', AttachmentController::class);
Route::resource('categorytodo', CategoryTodoController::class);
Route::resource('cheklists', CheklistsController::class);
Route::resource('commenttodo', CommentTodoController::class);
Route::resource('client', ClientController::class);
Route::resource('note', NoteController::class);
Route::resource('organization', OrganizationController::class);
Route::resource('organizationproject', OrganizationProjectController::class);   
Route::resource('organizationteam', OrganizationTeamController::class);   
Route::resource('project', ProjectController::class);
Route::resource('screenshot', ScreenshotController::class);   
Route::resource('team', TeamController::class);   
Route::resource('teamproject', TeamProjectController::class);   
Route::resource('timesheets', TimesheetController::class);   
Route::resource('todo', TodoController::class);
Route::resource('url', UrlController::class);   
Route::resource('userorganization', UserOrganizationController::class);   
Route::resource('userproject', UserProjectController::class);   
Route::resource('usersteam', UsersTeamController::class);   