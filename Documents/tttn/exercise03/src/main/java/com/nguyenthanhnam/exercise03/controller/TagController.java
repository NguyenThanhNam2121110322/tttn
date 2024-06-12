package com.nguyenthanhnam.exercise03.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import com.nguyenthanhnam.exercise03.entity.Tag;

import com.nguyenthanhnam.exercise03.service.TagService;

import java.util.List;
import java.util.UUID;

@RestController
@CrossOrigin({ "http://localhost:3000", "http://localhost:3001" })

@RequestMapping("api/tags")
public class TagController {

    @Autowired
    private TagService tagService;

    @GetMapping
    public ResponseEntity<List<Tag>> getAllTags() {
        List<Tag> tags = tagService.getAllTags();
        return ResponseEntity.ok(tags);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Tag> getTagsById(@PathVariable("id") UUID tagId) {
        Tag tag = tagService.getTagsById(tagId);
        if (tag != null) {
            return ResponseEntity.ok(tag);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

   @PutMapping("/{id}")
    public ResponseEntity<Tag> updateTag(@PathVariable("id") UUID tagId, @RequestBody Tag updatedTag) {
        Tag tag = tagService.updateTag(tagId, updatedTag);
        if (tag != null) {
            return ResponseEntity.ok(tag);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public ResponseEntity<Tag> addTag(@RequestBody Tag tag) {
        Tag addedTag = tagService.addTag(tag);
        return ResponseEntity.status(HttpStatus.CREATED).body(addedTag);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTag(@PathVariable("id") UUID tagId) {
        tagService.deleteTag(tagId);
        return ResponseEntity.noContent().build();
    }
}
