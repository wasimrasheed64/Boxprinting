<?php

namespace App\Exceptions;

use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Throwable;
use Inertia\Inertia;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class Handler extends ExceptionHandler
{
    protected $levels = [];

    protected $dontReport = [];

    protected $dontFlash = [
        'current_password',
        'password',
        'password_confirmation',
    ];

    public function register(): void
    {
        $this->reportable(function (Throwable $e) {
            //
        });
    }

    public function render($request, Throwable $exception)
    {
        // Show 404.vue for unknown Inertia routes
        if ($exception instanceof NotFoundHttpException && $request->header('X-Inertia')) {
            return Inertia::render('404')->toResponse($request)->setStatusCode(404);
        }

        return parent::render($request, $exception);
    }
}
