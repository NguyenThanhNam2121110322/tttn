package com.nguyenthanhnam.exercise03.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nguyenthanhnam.exercise03.entity.Country;
import com.nguyenthanhnam.exercise03.repository.CountryRepository;
import com.nguyenthanhnam.exercise03.service.CountryService;

import java.util.List;
import java.util.Optional;

@Service
public class CountryServiceImpl implements CountryService {

    @Autowired
    private CountryRepository countryRepository;

    @Override
    public Country addCountry(Country country) {
        // Đảm bảo rằng id của đối tượng Country là null trước khi lưu vào cơ sở dữ liệu
        country.setId(null);
        return countryRepository.save(country);
    }

    @Override
    public Country getCountryById(Long countryId) {
        Optional<Country> optionalCountry = countryRepository.findById(countryId);
        return optionalCountry.orElse(null);
    }

    @Override
    public List<Country> getAllCountries() {
        return countryRepository.findAll();
    }

    @Override
    public Country updateCountry(Long countryId, Country updatedCountry) {
        Country existingCountry = countryRepository.findById(countryId).orElse(null);

        if (existingCountry != null) {
            existingCountry.setIso(updatedCountry.getIso());
            existingCountry.setName(updatedCountry.getName());
            existingCountry.setUpperName(updatedCountry.getUpperName());
            existingCountry.setIso3(updatedCountry.getIso3());
            existingCountry.setNumCode(updatedCountry.getNumCode());
            existingCountry.setPhoneCode(updatedCountry.getPhoneCode());
            // Cập nhật các trường khác nếu cần

            return countryRepository.save(existingCountry);
        }

        return null;
    }

    @Override
    public void deleteCountry(Long countryId) {
        countryRepository.deleteById(countryId);
    }
}
