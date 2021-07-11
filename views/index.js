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

<article class="map-block gray-background">
    <script type="text/javascript" charset="utf-8" async <script type="text/javascript" charset="utf-8" async
        src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A6e671742735b3713168048e0ada4747d0b86077ab2379c80bc73e6008847308f&amp;width=100%25&amp;height=550&amp;lang=ru_RU&amp;scroll=true"></script>


    <div class="pane__info">
        <div class="title-block bottom-white-line">
            <h3 class="medium-size-text">Наши Контакты</h3>
        </div>
        <div class="info-block">
            <div class="map-address-block">
                Г. Минск, ул. Пономаренко 35а офис 329<br>
                <a class="address-link" href="mailto:alarmenergo@list.ru"><span
                        style="font-size: 12pt;">alarmenergo@list.ru</span></a>
            </div>
            <div class="menu__phone-block">
                <div class="phone-left">
                    <div class="phone_left-inner">

                        <div class="phone with_dropdown big">
                            <i class="fas fa-phone-alt" style="color: red;"></i>
                            <a href="tel:+375291743113">+375-29-174-31-13</a>
                        </div>
                        <div class=" schedule">
                            Пн. – Пт.: с 8:00 до 17:00 </div>
                    </div>
                </div>
            </div>
            <div class="email-block">
                <i class="far fa-envelope" style="color: red;"></i>
                <a href="mailto:alarmenergo@list.ru">alarmenergo@list.ru</a>
            </div>
            <div class="phone-right">
                <input class="phone-right_button" type="button" value="Задать вопрос">
            </div>
        </div>
    </div>

</article>
<script src="./scripts/catalog.js"></script>
`;