package com.nguyenthanhnam.exercise03.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/upload/**")
                .addResourceLocations("file:C:/Users/MyPC/Documents/tttn2/exercise03/src/main/resources/static/upload/");

        // Thêm đường dẫn cho thư mục categories
        registry.addResourceHandler("/upload/categories/**")
                .addResourceLocations("file:C:/Users/MyPC/Documents/tttn2/exercise03/src/main/resources/static/upload/categories/");
    }
}