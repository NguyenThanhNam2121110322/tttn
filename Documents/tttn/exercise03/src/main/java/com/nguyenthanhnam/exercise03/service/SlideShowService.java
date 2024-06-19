package com.nguyenthanhnam.exercise03.service;

import java.util.List;
import java.util.UUID;

import org.springframework.web.multipart.MultipartFile;

import com.nguyenthanhnam.exercise03.entity.Category;
import com.nguyenthanhnam.exercise03.entity.SlideShow;

public interface SlideShowService {
    SlideShow addSlideShow(SlideShow slideShow);

    SlideShow getSlideShowById(UUID slideShowId);

    List<SlideShow> getAllSlideShows();

    SlideShow updateSlideShow(UUID slideShowId, SlideShow updatedSlideShow);

    void deleteSlideShow(UUID slideShowId);

    void deleteImageFile(String imageUrl);
    SlideShow saveImage(UUID slideShowId, MultipartFile file,int i);
    List<SlideShow> saveImages(UUID slideShowId, MultipartFile[] files);
}
