package com.nguyenthanhnam.exercise03.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.nguyenthanhnam.exercise03.entity.Country;
import com.nguyenthanhnam.exercise03.service.CountryService;

import java.util.List;

@RestController
@RequestMapping("api/countries")
public class CountryController {

    @Autowired
    private CountryService countryService;

    @GetMapping
    public ResponseEntity<List<Country>> getAllCountries() {
        List<Country> countries = countryService.getAllCountries();
        return ResponseEntity.ok(countries);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Country> getCountryById(@PathVariable("id") Long countryId) {
        Country country = countryService.getCountryById(countryId);
        if (country != null) {
            return ResponseEntity.ok(country);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public ResponseEntity<Country> addCountry(@RequestBody Country country) {
        Country addedCountry = countryService.addCountry(country);
        return ResponseEntity.status(HttpStatus.CREATED).body(addedCountry);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Country> updateCountry(@PathVariable("id") Long countryId,
                                                  @RequestBody Country updatedCountry) {
        Country country = countryService.updateCountry(countryId, updatedCountry);
        if (country != null) {
            return ResponseEntity.ok(country);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCountry(@PathVariable("id") Long countryId) {
        countryService.deleteCountry(countryId);
        return ResponseEntity.noContent().build();
    }
}
