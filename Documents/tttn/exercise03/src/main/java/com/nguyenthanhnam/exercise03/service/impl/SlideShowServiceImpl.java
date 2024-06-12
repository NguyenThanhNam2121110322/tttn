package com.nguyenthanhnam.exercise03.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nguyenthanhnam.exercise03.entity.SlideShow;
import com.nguyenthanhnam.exercise03.repository.SlideShowRepository;
import com.nguyenthanhnam.exercise03.service.SlideShowService;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class SlideShowServiceImpl implements SlideShowService {

    @Autowired
    private SlideShowRepository slideShowRepository;

    @Override
    public SlideShow addSlideShow(SlideShow slideShow) {
        return slideShowRepository.save(slideShow);
    }

    @Override
    public SlideShow getSlideShowById(UUID slideShowId) {
        Optional<SlideShow> optionalSlideShow = slideShowRepository.findById(slideShowId);
        return optionalSlideShow.orElse(null);
    }

    @Override
    public List<SlideShow> getAllSlideShows() {
        return slideShowRepository.findAll();
    }

    @Override
    public SlideShow updateSlideShow(UUID slideShowId, SlideShow updatedSlideShow) {
        SlideShow existingSlideShow = slideShowRepository.findById(slideShowId).orElse(null);

        if (existingSlideShow != null) {
            existingSlideShow.setDescriptionUrl(updatedSlideShow.getDescriptionUrl());
            existingSlideShow.setImageUrl(updatedSlideShow.getImageUrl());
            // You may need to handle other relationships here
            return slideShowRepository.save(existingSlideShow);
        }

        return null;
    }

    @Override
    public void deleteSlideShow(UUID slideShowId) {
        slideShowRepository.deleteById(slideShowId);
    }
}
