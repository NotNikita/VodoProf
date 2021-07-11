const index = `
<article class="welcome-block">
    <div class="content">
        <section class="welcome__info-slider">
            <div class="slider-wrapper">
                <div class="prev-btn"><i class="fas fa-chevron-left"></i></div>
                <div class="slides-container">
                    <div class="slide-image">
                        <img id="image-slider" src="./assets/slider/slide-0.jpg" alt="Слайд номер 1">
                    </div>
                </div>

                <div class="next-btn"><i class="fas fa-chevron-right"></i></div>
            </div>
            <ol class="navigation-dots">
            </ol>
        </section>
    </div>
</article>

<article class="about-us-block gray-background">
    <div class="content">
        <section class="about-us__item">
            <div>
                <img src="assets/about_us/garanty.png" alt="Quality Garanty">
                <h3>Гарантия качества</h3>
            </div>
            <p>
                Товар сертифицирован
            </p>
        </section>

        <section class="about-us__item">
            <div>
                <img src="assets/about_us/optimal_choice.png" alt="">
                <h3>Оптимальный выбор</h3>
            </div>
            <p>
                Высокое качество и широкий ассортимент
            </p>
        </section>

        <section class="about-us__item">
            <div>
                <img src="assets/about_us/ship_intime.png" alt="">
                <h3>Доставка в срок</h3>
            </div>
            <p>
                Оперативная доставка и выгрузка товара
            </p>
        </section>
    </div>
</article>

<article class="catalog-block gray-background">
    <div class="content">

        <div class="catalog-labels">
            <div class="title-block">
                <h3 class="medium-size-text">Каталог товаров</h3>
                <a href="./product/product.html" class="right_link_block">Весь каталог</a>

            </div>
            <div class="top-text">
                <p>В нашем каталоге представлена линейка продукции по сбору и отводу воды, инженерного оснащения зданий
                    и
                    благоустройства территорий.</p>
            </div>
        </div>
        <div class="catalog_items_list">
            <!--  Готовый пример верстки элемента каталога-->
            <!-- <div class="category-wrapper">
          <div class="category-item">
            <div class="img">
              <a href="/product/category-name/"><img src="./assets/test-catalog.jpg" alt="category image" class="category-img"></a>
            </div>
            <div class="category-info">
              <div class="category-name">
                <a href="/product/category-name" class="dark-link">Внешний линейный водоотвод</a>
              </div>
              <ul class="category-classes">
                <li>
                  <a class ="category-class" href="/product/category-name/class-inside-category">some tag</a>
                </li>
                <li>
                  <a class ="category-class" href="/product/category-name/class-inside-category">some tag</a>
                </li>
                <li>
                  <a class ="category-class" href="/product/category-name/class-inside-category">some tag</a>
                </li>
              </ul>
            </div>
          </div>
        </div> -->
        </div>

    </div>
</article>



<script src="../scripts/slider.js"></script>
`;