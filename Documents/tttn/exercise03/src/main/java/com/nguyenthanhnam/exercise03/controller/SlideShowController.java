package com.nguyenthanhnam.exercise03.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.nguyenthanhnam.exercise03.entity.SlideShow;
import com.nguyenthanhnam.exercise03.service.SlideShowService;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("api/slideshows")
public class SlideShowController {

    @Autowired
    private SlideShowService slideShowService;

    @GetMapping
    public ResponseEntity<List<SlideShow>> getAllSlideShows() {
        List<SlideShow> slideShows = slideShowService.getAllSlideShows();
        return ResponseEntity.ok(slideShows);
    }

    @GetMapping("/{id}")
    public ResponseEntity<SlideShow> getSlideShowById(@PathVariable("id") UUID slideShowId) {
        SlideShow slideShow = slideShowService.getSlideShowById(slideShowId);
        if (slideShow != null) {
            return ResponseEntity.ok(slideShow);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public ResponseEntity<SlideShow> addSlideShow(@RequestBody SlideShow slideShow) {
        SlideShow addedSlideShow = slideShowService.addSlideShow(slideShow);
        return ResponseEntity.status(HttpStatus.CREATED).body(addedSlideShow);
    }

    @PutMapping("/{id}")
    public ResponseEntity<SlideShow> updateSlideShow(@PathVariable("id") UUID slideShowId,
            @RequestBody SlideShow updatedSlideShow) {
        SlideShow slideShow = slideShowService.updateSlideShow(slideShowId, updatedSlideShow);
        if (slideShow != null) {
            return ResponseEntity.ok(slideShow);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteSlideShow(@PathVariable("id") UUID slideShowId) {
        slideShowService.deleteSlideShow(slideShowId);
        return ResponseEntity.noContent().build();
    }
}
