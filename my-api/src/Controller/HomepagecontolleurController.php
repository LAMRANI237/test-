<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;


class HomepagecontolleurController extends AbstractController
{
    #[Route('/homepagecontolleur', name: 'app_homepagecontolleur')]
    public function index(): Response
    {
        return $this->render('homepagecontolleur/index.html.twig', [
            'controller_name' => 'HomepagecontolleurController',
        ]);
    }
}
