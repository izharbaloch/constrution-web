<?php

namespace App\Http\Controllers\Front;

use App\Http\Controllers\Controller;
use App\Models\Article;
use Illuminate\Http\Request;

class ArticleController extends Controller
{
    public function index()
    {
        // this method return all active article
        $articles = Article::where('status', 1)->orderBy('created_at', 'DESC')->get();
        return response()->json([
            'status' => true,
            'data' => $articles
        ]);
    }
    public function latestArticles(Request $request)
    {
        // this method return all latest active article
        $articles = Article::where('status', 1)
            ->take($request->get('limit'))
            ->orderBy('created_at', 'DESC')->get();

        return response()->json([
            'status' => true,
            'data' => $articles
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function article($id)
    {
        $article = Article::find($id);

        if ($article == null) {
            return response()->json([
                'status' => false,
                'errors' => 'Article Not Found.'
            ]);
        }

        return response()->json([
            'status' => true,
            'data' => $article,
        ]);
    }
}
