<template>
    <header>
        <nav class="p-2 mb-2">
            <ul class="nav justify-content-strt">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">App</a>
                </li>
            </ul>
        </nav>
    </header>

    <hr>

    <div class="container">
        <div class="row py-4 m-3">
            <slot />
        </div>
    </div>
</template>