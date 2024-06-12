package com.nguyenthanhnam.exercise03.service;

import java.util.List;
import java.util.UUID;

import com.nguyenthanhnam.exercise03.entity.SlideShow;

public interface SlideShowService {
    SlideShow addSlideShow(SlideShow slideShow);

    SlideShow getSlideShowById(UUID slideShowId);

    List<SlideShow> getAllSlideShows();

    SlideShow updateSlideShow(UUID slideShowId, SlideShow updatedSlideShow);

    void deleteSlideShow(UUID slideShowId);
}
